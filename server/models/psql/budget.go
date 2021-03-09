package psql

import (
	"database/sql"

	"github.com/joshuaherrera/go-budget/server/models"
)

// BudgetModel defines wrapper for sql.DB connection pool
type BudgetModel struct {
	DB *sql.DB
}

// All grabs all budgets from db
func (m *BudgetModel) All() ([]*models.Budget, error) {
	/*
	Need to flesh out Db section... TODO
	*/
	// stmt := `SELECT todo_id, description FROM todo`
	// rows, err := m.DB.Query(stmt)
	// if err != nil {
	// 	return nil, err
	// }
	// 	defer rows.Close()

	// todos := []*models.Budget{}

	// for rows.Next() {
	// 	t := &models.Budget{}

	// 	err := rows.Scan(&t.ID, &t.Name)
	// 		if err != nil {
	// 			return nil, err
	// 	}

	// 	todos = append(todos, t)
	// }
	// // check for errors in scanning
	// 	if err = rows.Err(); err != nil {
	// 	return nil, err
	// }

	// return todos, nil
}