from django.shortcuts import redirect,render
from django.contrib.auth.models import User
from django.contrib import messages
from .EmailBackEnd import EmailBackEnd
from django.contrib.auth import login,authenticate


#register işlemi
def REGISTER(request):
    if request.method=="POST":
        username=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')

        #email kontrolü
        if User.objects.filter(email=email).exists():
            messages.warning(request, 'Bu E-posta Zaten Mevcut !')
            return redirect('register')
        
        #username kontrolü
        if User.objects.filter(username=username).exists():
            messages.warning(request, 'Bu Kullanıcı Adı Zaten Mevcut !')
            return redirect('register')
        
        user=User(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()
        return redirect('login')
    return render(request, 'registration/register.html')

#login işlemi
def DO_LOGIN(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')

        user = EmailBackEnd().authenticate(username=email, password=password)

        if user!=None:
            login(request,user)
            return redirect('home')
        else:
            messages.error(request, 'E-posta ve Şifre Geçersiz !')
            return redirect('login')