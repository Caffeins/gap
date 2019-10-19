# Generated by Django 2.2.6 on 2019-10-19 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('follow', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='follow',
            name='follow_user_email',
            field=models.EmailField(default=None, max_length=255, unique=True, verbose_name='メールアドレス'),
        ),
        migrations.AddField(
            model_name='follow',
            name='follow_user_hobby',
            field=models.CharField(blank=True, help_text='半角スペースで単語わけしてください', max_length=255, null=True, verbose_name='趣味'),
        ),
        migrations.AddField(
            model_name='follow',
            name='follow_user_name',
            field=models.CharField(default=None, max_length=255, null=True, verbose_name='ユーザ名'),
        ),
    ]