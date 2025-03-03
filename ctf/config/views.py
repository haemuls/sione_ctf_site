from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def notice(request):
    return render(request, 'notice.html')

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def board(request):
    return render(request, 'board.html')


