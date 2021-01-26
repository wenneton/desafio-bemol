# Generated by Django 3.1.5 on 2021-01-26 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=70)),
                ('birthDate', models.CharField(default='', max_length=11)),
                ('address', models.CharField(default='', max_length=200)),
                ('zipCode', models.CharField(default='', max_length=9)),
            ],
        ),
        migrations.DeleteModel(
            name='Tutorial',
        ),
    ]
