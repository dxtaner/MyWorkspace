from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, NumberRange, Optional

class SearchForm(FlaskForm):
    title = StringField("Movie Title", validators=[DataRequired()])
    submit = SubmitField("Search")

class EditForm(FlaskForm):
    rating = FloatField("Rating (0–10)", validators=[DataRequired(), NumberRange(min=0, max=10)])
    review = TextAreaField("Review", validators=[Optional()])
    submit = SubmitField("Save")

class AddManualForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    year = StringField("Year")
    description = TextAreaField("Description")
    rating = FloatField("Rating", validators=[Optional(), NumberRange(min=0, max=10)])
    img_url = StringField("Image URL")
    submit = SubmitField("Add Movie")
