"""empty message

Revision ID: de9bf00eb89c
Revises: 
Create Date: 2023-08-23 22:05:28.508431

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'de9bf00eb89c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('agencies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('fulladdress', sa.String(), nullable=True),
    sa.Column('zipcode', sa.String(), nullable=True),
    sa.Column('category', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('google_maps_url', sa.String(), nullable=True),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.Column('website', sa.String(), nullable=True),
    sa.Column('opening_hours', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('newsletter_signups',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('safetyplans',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question1', sa.String(), nullable=True),
    sa.Column('question2', sa.String(), nullable=True),
    sa.Column('question3', sa.String(), nullable=True),
    sa.Column('question4', sa.String(), nullable=True),
    sa.Column('question5', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('consultations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('message', sa.String(), nullable=True),
    sa.Column('agency_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['agency_id'], ['agencies.id'], name=op.f('fk_consultations_agency_id_agencies')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('consultationAgencies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('consultation_id', sa.Integer(), nullable=True),
    sa.Column('agency_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['agency_id'], ['agencies.id'], name=op.f('fk_consultationAgencies_agency_id_agencies')),
    sa.ForeignKeyConstraint(['consultation_id'], ['consultations.id'], name=op.f('fk_consultationAgencies_consultation_id_consultations')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('consultationAgencies')
    op.drop_table('consultations')
    op.drop_table('safetyplans')
    op.drop_table('newsletter_signups')
    op.drop_table('agencies')
    # ### end Alembic commands ###
