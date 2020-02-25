Name: Fabio Parra

email: faparraf@gmail.com
# DevOps Test
**Github Repos** ​:
- https://github.com/faparraf/vanhack_back
- https://github.com/faparraf/vanhack_front
- https://github.com/faparraf/vanhack_infra
## Applications

### Backend App ​:

The backend application is developed in golang using beego framework, it exposes in the 8080 port a REST API offering the GET, POST and PUT methods and connects to the postgres database. It is compiled and place it in a docker container. Has also a simple CI pipeline using travis-ci, it build the container and pushes into a private registry (ECR in this case).

### Frontend App ​:
This app is developed using Angular 7, provides list, create, edit and delete pages, connects to a REST API in order to insert into a relational database. It has a travis-ci simple pipeline where the app is builded, and the static files are copied into a S3 bucket.

## Infra Repo
### Architecture:
The database is into a RDS instance; the backend app container is deployed in a ECS cluster (EC2) and calls the RDS for the database (both exist in the same VPC). Finally the Frontend static files are in a S3 bucket and the exposed using a CloudFront distribution.

### RDS -> ​ rds_creation.yml ​:

The ansible playbook create a RDS instance using the public role ​ cdriehuys.rds-postgres ​.
The instance has no public visibility outside the VPC (default). The create_tables.sql script is needed to be executed in the database in order to provide the app schema.

### CloudFront -> ​ cf_creation.yml ​:

The ansible playbook creates a S3 bucket and a CloudFront distribution, using ansible-aws modules. The CF distribution has no aliases (no DNS has been purchased) so the links are the ones provided by AWS, anyway through CF dist we can use a SSL certificate and access the app via HTTPS protocol.
[http://d10u5i0yyzs565.cloudfront.net/](http://d10u5i0yyzs565.cloudfront.net/)
https://d10u5i0yyzs565.cloudfront.net/


### ECS -> ​ ecs_creation.yml ​:

The ansible playbook creates EC2 instances using ASG, then attach them to a ECS cluster.
A ECS service, task definition, target group and ALB were created, the ALB listener url for the backend container is:
[http://vanhack-apps-234107324.us-east-1.elb.amazonaws.com:8080/](http://vanhack-apps-234107324.us-east-1.elb.amazonaws.com:8080/)
This url has no https access due to the lack of DNS, with a Hosted Zone one can attach a SSL certificate to the listener in order to provide a secure protocol (or the standalone certificate if the DNS uses a different cloud provider).

### EC2 Instances:
The ASG has only one instance running (pricing reasons) and the connect command is `ssh -i "custom_ssh_key.pem" ​ec2-user@ec2-3-89-81-116.compute-1.amazonaws.com` where the public IPv4 is 3.89.81.116. Anyway the instance has no evident work beyond the docker containers running within.


