import React from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";

const TodoItem = ({
  key,
  todo,
  onToggleComplete,
  onStartEditing,
  onRemove,
}) => {
  return (
    <Card key={key} sx={{ marginTop: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ width: "100%" }}
          autoComplete="off"
          variant="body1"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            size="small"
            onClick={() => onStartEditing(todo.id, todo.title)}
            sx={{ minWidth: 100, ml: 1.5 }}
          >
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => onToggleComplete(todo.id)}
            sx={{
              minWidth: 100,
              ml: 1.5,
              backgroundColor: "#32a534",
              "&:hover": {
                backgroundColor: "#32a534",
                boxShadow: "none",
              },
            }}
          >
            {todo.completed ? "Uncomplete" : "Complete"}
          </Button>
          <Button
            sx={{
              minWidth: 100,
              ml: 1.5,
              backgroundColor: "#e01e1c",
              "&:hover": {
                backgroundColor: "#e01e1c",
                boxShadow: "none",
              },
            }}
            size="small"
            onClick={() => onRemove(todo.id)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
