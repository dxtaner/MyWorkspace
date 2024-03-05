def library_fine(returned, due):
    day_returned, month_returned, year_returned = returned
    day_due, month_due, year_due = due

    if year_returned < year_due or (year_returned == year_due and month_returned < month_due) or (
            year_returned == year_due and month_returned == month_due and day_returned <= day_due):
        fine = 0
    elif year_returned == year_due and month_returned == month_due:
        fine = 15 * (day_returned - day_due)
    elif year_returned == year_due and month_returned > month_due:
        fine = 500 * (month_returned - month_due)
    else:
        fine = 10000

    return fine

# Input
returned_date = list(map(int, input().split()))
due_date = list(map(int, input().split()))

# Output
result = library_fine(returned_date, due_date)
print(result)
