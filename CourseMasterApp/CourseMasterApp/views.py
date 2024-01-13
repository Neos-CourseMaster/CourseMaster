from django.shortcuts import redirect,render
from app.models import Categories,Course,Level
from django.template.loader import render_to_string
from django.http import JsonResponse

def BASE(request):
    return render(request,'base.html')

def HOME(request):
    category = Categories.objects.all().order_by("id")[0:6]
    course = Course.objects.filter(status="PUBLISH").order_by('-id')
    
    context ={
        'category':category,
        'course':course
    }
    return render(request,'Main/home.html',context)

def SINGLE_COURSE(request):
    category=Categories.get_all_category(Categories)
    level=Level.objects.all()
    course=Course.objects.all()
    FreeCourse_count=Course.objects.filter(price=0).count()
    PaidCourse_count=Course.objects.filter(price__gte=1).count()

    context={
        'category':category,
        'level':level,
        'course':course,
        'FreeCourse_count':FreeCourse_count,
        'PaidCourse_count':PaidCourse_count,
    }

    return render(request,'Main/single_course.html',context)

def filter_data(request):
    category=request.GET.getlist('category[]')
    level=request.GET.getlist('level[]')
    price=request.GET.getlist('price[]')
    
    if price==['PriceFree']:
        course = Course.objects.filter(price=0)
    elif price==['PricePaid']:
        course = Course.objects.filter(price__gte=1)
    elif price==['PriceAll']:
        course = Course.objects.all()
    elif category:
        course=Course.objects.filter(category__id__in=category).order_by('-id')
    elif level:
        course=Course.objects.filter(level__id__in=level).order_by('-id')
    else:
        course=Course.objects.all().order_by('-id')
    
    context={
        'course':course
    }

    t = render_to_string('ajax/course.html', context)
    return JsonResponse({'data': t})

def CONTACT_US(request):
    return render(request,'Main/contact_us.html')

def ABOUT_US(request):
    return render(request,'Main/about_us.html')

def SEARCH_COURSE(request):
    query = request.GET["query"]
    course = Course.objects.filter(title__icontains = query)
    print(course)
    
    content = {
        'course': course,
    }
    
    return render(request,"search/search.html",content)