# Generated by Django 2.2.6 on 2019-10-19 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20191019_1929'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(default=None, max_length=255, unique=True, verbose_name='メールアドレス'),
        ),
    ]
