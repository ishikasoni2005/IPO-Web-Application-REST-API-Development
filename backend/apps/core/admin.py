from django.contrib import admin

from .models import Ipo


@admin.register(Ipo)
class IpoAdmin(admin.ModelAdmin):
    list_display = ("id", "company_name", "issue_date", "price_band", "lot_size")
    search_fields = ("company_name", "price_band", "description")
    ordering = ("-id",)
