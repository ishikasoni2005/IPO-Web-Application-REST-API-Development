import re

from django.db import models
from django.utils import timezone


class Ipo(models.Model):
    id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=255)
    issue_date = models.DateField()
    price_band = models.CharField(max_length=100)
    lot_size = models.PositiveIntegerField(blank=True, null=True)
    description = models.TextField(blank=True)

    class Meta:
        db_table = "ipos"
        ordering = ["-id"]

    def __str__(self):
        return self.company_name

    @property
    def status(self):
        today = timezone.localdate()
        if self.issue_date > today:
            return "Upcoming"
        if self.issue_date == today:
            return "Open"
        return "Closed"

    @property
    def issue_price(self):
        matches = re.findall(r"\d+(?:\.\d+)?", self.price_band or "")
        if not matches:
            return None
        return float(matches[-1])

    @property
    def market_lot(self):
        return self.lot_size
