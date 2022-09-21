import calendar

print('Welcome to new calendar\n')

year = int(input('Enter year: '))
month = int(input('Enter num of any month: '))

print(calendar.month(year, month))

print('Goodbye')