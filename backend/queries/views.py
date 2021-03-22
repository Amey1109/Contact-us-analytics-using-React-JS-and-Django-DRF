from django.shortcuts import render
from django.db.models import Count
from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse

import json

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


@api_view(['GET'])
def getAnalytics(request):
    model_object = Query.objects.all().extra({'date': "date(date)"}).values(
        'date').annotate(created_at=Count('pk'))
    results = []

    for Data in model_object:
        result={
            "Date": Data.date,
            "Created_at": Data.created_at
        }
        results.append(result)

    return Response(results)


    # serializers_object = json.loads(serialize('json',model_object))


    # return JsonResponse({'data':serializers_object},encoder=ExtendedEncoder)
    # # serializer_object = QuerySerializer(model_object, many=True)
    # # return Response(serialized_object.data)
