from django.shortcuts import render
from django.db.models import Count
from django.db.models import Q

import json
import datetime

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Query
from .serializer import QuerySerializer


@api_view(['GET'])
def getQuery(request):
    query_set = Query.objects.all()
    serializer_object = QuerySerializer(query_set, many=True)

    return Response(serializer_object.data)


@api_view(['POST'])
def postQuery(request):
    new_model_object = request.data
    serializer_object = QuerySerializer(data=new_model_object)
    if serializer_object.is_valid():
        serializer_object.save()
        return Response({"message": "Query Submitted"})
    else:
        return Response(serializer_object.errors)


@api_view(['POST'])
def getAnalytics(request):
    start_date = request.data["start_date"]
    end_date = request.data["end_date"]

    start_year = int(start_date[:4])
    start_month = int(start_date[5:7])
    start_date = int(start_date[8:])

    end_year = int(end_date[:4])
    end_month = int(end_date[5:7])
    end_date = int(end_date[8:])

    model_objects = Query.objects.filter(Q(date__gte=datetime.date(start_year, start_month, start_date)) & Q(date__lte=datetime.date(end_year, end_month, end_date))).extra({'date': "date(date)"}).values(
        'date').annotate(Count=Count('pk'))

    serialized = list(model_objects)
    return Response(serialized)
