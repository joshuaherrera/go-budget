package models

import (
	"errors"
)

// ErrNoRecords returns an error if no model found
var ErrNoRecords = errors.New("models: no matching records found")

// Budget describes the budget record
type Budget struct{
	ID int `json:"budgetID"`
	Name string `json:"budgetName"`
}