# Generated by Django 5.0.1 on 2024-01-14 19:09

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_usercourse'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserCourse',
            new_name='UserCource',
        ),
        migrations.RenameField(
            model_name='video',
            old_name='priview',
            new_name='preview',
        ),
    ]