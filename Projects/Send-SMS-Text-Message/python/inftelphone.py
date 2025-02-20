from vonage import Client, NumberInsight
from pprint import pprint

client = Client(key="77d46dc1", secret="4kRxPOuqT162ueqA")
insight = NumberInsight(client)

#number = The number to be entered


insight_json = insight.get_advanced_number_insight(number="number")
pprint(insight_json)
