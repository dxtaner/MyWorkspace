from vonage import Client
#number = The number to be entered

client = Client(key="77d46dc1", secret="4kRxPOuqT162ueqA")

response = client.create_call({
    'to': [{'type': 'phone', 'number': 'number'}],
    'from': {'type': 'phone', 'number': 'number'},
    'ncco': [{'action': 'talk', 'text': 'This is a text to speech call from Nexmo'}]
})

print(response)
