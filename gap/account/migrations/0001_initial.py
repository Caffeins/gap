# Generated by Django 2.2.4 on 2019-09-11 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='メールアドレス')),
                ('date_of_birth', models.DateField(null=True, verbose_name='誕生日')),
                ('name', models.CharField(default=None, max_length=255, null=True, verbose_name='ユーザ名')),
                ('ailias', models.CharField(max_length=255, null=True, verbose_name='ニックネーム')),
                ('image', models.ImageField(default=None, upload_to='photos', verbose_name='サムネ画像')),
                ('hobby', models.CharField(blank=True, help_text='半角スペースで単語わけしてください', max_length=255, null=True, verbose_name='趣味')),
                ('place', models.CharField(blank=True, help_text='お住まいの地域', max_length=255, null=True, verbose_name='居住地')),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
