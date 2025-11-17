def format_news(stock_symbol, percent, articles):
    """Haberleri terminale yazdırmak için hazırla"""
    arrow = "🔺" if percent > 0 else "🔻"
    messages = []

    for article in articles:
        text = (
            f"{stock_symbol}: {arrow}{abs(percent)}%\n"
            f"Headline: {article['title']}\n"
            f"Brief: {article['description']}\n"
        )
        messages.append(text)
    return messages
