# Generated by Django 5.0.1 on 2024-01-14 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_lesson_video'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lesson',
            old_name='NAME',
            new_name='name',
        ),
        migrations.AlterField(
            model_name='video',
            name='time_duration',
            field=models.IntegerField(null=True),
        ),
    ]