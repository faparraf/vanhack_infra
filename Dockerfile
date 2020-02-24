FROM python:3.7

ARG AWS_REGION
ARG AWS_SECRET_KEY
ARG AWS_ACCESS_KEY
ARG SSH_KEY_URL

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

RUN ansible-galaxy install cdriehuys.rds-postgres
RUN ansible-galaxy install mediapeers.ecs-cluster

WORKDIR /infra
COPY rds_creation.yml rds_creation.yml
COPY cf_creation.yml cf_creation.yml
COPY ecs_creation.yml ecs_creation.yml

RUN wget --output-document key.pub $SSH_KEY_URL

RUN ansible-playbook rds_creation.yml
RUN ansible-playbook cf_creation.yml
RUN ansible-playbook ecs_creation.yml
