FROM golang as build

WORKDIR /go/src/vanhack_back_app

COPY . .

RUN go get -v ./...
RUN GOOS=linux GOARCH=amd64 go build -o main .

FROM golang

WORKDIR /app
COPY --from=build /go/src/vanhack_back_app/main /app/main
COPY --from=build /go/src/vanhack_back_app/conf/app.conf /app/conf/app.conf

CMD ["./main"]