from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from .models import User
from django.contrib.auth.forms import AuthenticationForm



class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(
        label="Password confirmation", widget=forms.PasswordInput
    )

    class Meta:
        model = User

        fields = ("clan", "name", "alias", "email", "image", "hobby", "place")

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = (
            "clan",
            "name",
            "alias",
            "email",
            "password",
            "date_of_birth",
            "image",
            "hobby",
            "place",
            "is_active",
            "is_admin",
        )

    def clean_password(self):
        return self.initial["password"]




# ログインフォーム定義

class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
       super().__init__(*args, **kwargs)
       #htmlの表示を変更可能にします
       self.fields['username'].widget.attrs['class'] = 'form-control'
       self.fields['password'].widget.attrs['class'] = 'form-control'