# Generated by Django 4.0.6 on 2022-07-31 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calorie', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='name',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='first_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='last_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='email',
            field=models.EmailField(default='', max_length=255, unique=True),
        ),
    ]
