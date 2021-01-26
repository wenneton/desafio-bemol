from django.shortcuts import render
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def users_list(request):
    pass

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    # find user by id
    try: 
        user = User.objects.get(pk=pk) 
    except User.DoesNotExist: 
        return JsonResponse({'message': 'The user does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE user