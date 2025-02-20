from vonage import Client, Sms

client = Client(api_key="77d46dc1", api_secret="4kRxPOuqT162ueqA")
sms = Sms(client)


#number = The number to be entered
responseData = sms.send_message(
    {
        "from": "Vonage APIs",
        "to": "number",
        "text": "A text message sent using the Nexmo SMS API",
    }
)

if responseData["messages"][0]["status"] == "0":
    print("Message sent successfully.")
else:
    print(f"Message failed with error: {
          responseData['messages'][0]['error-text']}")
