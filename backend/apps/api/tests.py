from datetime import date, timedelta

from rest_framework import status
from rest_framework.test import APITestCase

from apps.core.models import Ipo


class IpoApiTests(APITestCase):
    def test_list_ipos_returns_serialized_fields(self):
        ipo = Ipo.objects.create(
            company_name="Acme Industries",
            issue_date=date.today() + timedelta(days=2),
            price_band="100 - 120",
            lot_size=25,
            description="A test IPO",
        )

        response = self.client.get("/api/ipos")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["id"], ipo.id)
        self.assertEqual(response.data[0]["status"], "Upcoming")
        self.assertEqual(response.data[0]["issue_price"], 120.0)
        self.assertEqual(response.data[0]["market_lot"], 25)

    def test_create_ipo(self):
        payload = {
            "company_name": "Orbit Capital",
            "issue_date": str(date.today()),
            "price_band": "450 - 470",
            "lot_size": 14,
            "description": "IPO from the DRF endpoint",
        }

        response = self.client.post("/api/ipos", payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ipo.objects.count(), 1)
        self.assertEqual(Ipo.objects.get().company_name, payload["company_name"])
