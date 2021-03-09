package main

import (
	"encoding/json"
	"net/http"
)

// Res is a struct for simple responses
type Res struct {
	Message string `json:"message"`
}

func (app *application) home(w http.ResponseWriter, r *http.Request)  {
	if r.URL.Path != "/" {
		app.notFound(w)
		return
	}
	// data := []byte(`{"mesage":"hello world!"}`)
	// w.Write(data)

	data := Res{"hello world!"}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
	json.NewEncoder(w).Encode(data)
}