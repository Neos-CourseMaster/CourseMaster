# Generated by Django 5.0.1 on 2024-01-22 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_ourteam'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='ourTeam_title',
            field=models.CharField(max_length=100, null=True),
        ),
    ]