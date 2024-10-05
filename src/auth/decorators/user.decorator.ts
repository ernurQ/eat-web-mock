import { UsersEntity } from '@/users/entities/user.entity'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const User = createParamDecorator(
	(data: keyof UsersEntity, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user

		return data ? user[data] : user
	}
)
