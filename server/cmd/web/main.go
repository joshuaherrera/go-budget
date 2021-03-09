package main

import (
	"flag"
	"log"
	"net/http"
	"os"
)


type application struct {
	errorLog      *log.Logger
	infoLog       *log.Logger
}

func main()  {
	addr := flag.String("addr", ":5000", "HTTP Network Address")

	// dsn := flag.String("dsn", "postgresql://postgres:@localhost:5432/perntodo?sslmode=disable", "PostgreSQL data source name")
	flag.Parse()

	infoLog := log.New(os.Stdout, "INFO:\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stderr, "ERROR:\t", log.Ldate|log.Ltime|log.Lshortfile)

	// db, err := openDB(*dsn)
	// 	if err != nil {
	// 	errorLog.Fatal(err)
	// }
	// defer db.Close()

	app := &application{
		errorLog: errorLog,
		infoLog: infoLog,
	}

	srv := &http.Server{
		Addr: *addr,
		ErrorLog: errorLog,
		Handler: app.routes(),
	}

	infoLog.Printf("starting server on %s", *addr)
	err := srv.ListenAndServe()
	errorLog.Fatal(err)

}