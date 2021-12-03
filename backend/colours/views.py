from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Colour
from .serializers import ColourSerializer
from django.http.response import HttpResponse


class ColourListView(APIView):

    def get(self, _request):
        # get all the products from the db
        colours = Colour.objects.all()
        print('COLOURS ->', colours)
        serialized_colours = ColourSerializer(colours, many=True)
        print('SERIALIZED COLOURS ->', serialized_colours)
        return Response(serialized_colours.data, status=status.HTTP_200_OK)

    ## POST ROUTE
    def post(self, request):
        colour = ColourSerializer(data=request.data)
        # checks if it is valid
        if colour.is_valid():
            # saves it to the DB
            colour.save()
            # sends 201 back to the front-end
            return Response(colour.data, status=status.HTTP_201_CREATED)
        else:
            return Response(colour.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

## CREATE, DELETE & UPDATE ROUTE
class ColourDetailView(APIView):
    ## GET BY ID
    def get(self, _request, pk):
        colour = Colour.objects.get(id=pk)
        # converts python object into JSON
        serialized_colour = ColourSerializer(colour)
        return Response(serialized_colour.data, status=status.HTTP_200_OK)

    ## DELETE BY ID
    def delete(self, request, pk):
        try:
            colour = Colour.objects.get(id=pk)
            colour.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## UPDATE ROUTE
    def put(self, request, pk):
        colour = Colour.objects.get(id=pk)
        updated_colour = ColourSerializer(colour, data=request.data)
        if updated_colour.is_valid():
            updated_colour.save()
            return Response(updated_colour.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_colour.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
