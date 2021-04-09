import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        return response.status(400).json({ message: 'Validation fails' });
    }

    console.error(error);

    return response.status(500).json({ message: 'Internal server error' })
};

export default errorHandler;