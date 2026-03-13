from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Ipo",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("company_name", models.CharField(max_length=255)),
                ("issue_date", models.DateField()),
                ("price_band", models.CharField(max_length=100)),
                ("lot_size", models.PositiveIntegerField(blank=True, null=True)),
                ("description", models.TextField(blank=True)),
            ],
            options={
                "db_table": "ipos",
                "ordering": ["-id"],
            },
        ),
    ]
