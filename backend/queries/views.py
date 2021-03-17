from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Query
from .serializer import QuerySerializer


@api_view(['GET'])
def getQuery(request):
    query_set =Query.objects.all() 
    serializer_object = QuerySerializer(query_set,many=True)

    return Response(serializer_object.data)

@api_view(['POST'])
def postQuery(request):
    new_model_object = request.data
    serializer_object = QuerySerializer(data = new_model_object)
    if serializer_object.is_valid():
        serializer_object.save()
        return Response({"message":"Query Submitted"})
    else:
        return Response(serializer_object.errors)


    
