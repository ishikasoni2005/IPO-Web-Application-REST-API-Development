from rest_framework import serializers

from apps.core.models import Ipo


class IpoSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField(read_only=True)
    issue_price = serializers.SerializerMethodField(read_only=True)
    market_lot = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Ipo
        fields = [
            "id",
            "company_name",
            "issue_date",
            "price_band",
            "lot_size",
            "description",
            "status",
            "issue_price",
            "market_lot",
        ]

    def get_status(self, obj):
        return obj.status

    def get_issue_price(self, obj):
        return obj.issue_price

    def get_market_lot(self, obj):
        return obj.market_lot
