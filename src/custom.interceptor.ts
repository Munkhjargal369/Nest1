import { NestInterceptor , ExecutionContext, CallHandler} from "@nestjs/common";
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
    intercept(context : ExecutionContext, handler: CallHandler) {

        console.log("this is intercepting the request")
        console.log({context})
        return handler.handle().pipe(
            map((data) => {
                console.log("this is intercepting the response")
                console.log({data})

                const response = {
                    ...data,
                    createdAt: data.created_at
                }
                return response
            })
        )

    }
}