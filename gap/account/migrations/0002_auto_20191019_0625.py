# Generated by Django 2.2.6 on 2019-10-19 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clan', '0002_auto_20191019_0625'),
        ('event', '0005_auto_20191019_0625'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='event',
            field=models.ManyToManyField(null=True, to='event.Event'),
        ),
        migrations.AddField(
            model_name='user',
            name='introduction',
            field=models.TextField(default=None, max_length=2000, verbose_name='紹介'),
        ),
        migrations.RemoveField(
            model_name='user',
            name='clan',
        ),
        migrations.AddField(
            model_name='user',
            name='clan',
            field=models.ManyToManyField(null=True, to='clan.Clan'),
        ),
    ]