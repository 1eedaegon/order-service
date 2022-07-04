import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  @IsString()
  name: String;

  @Field((type) => Boolean)
  @IsBoolean()
  isVegan: Boolean;

  @Field((type) => String)
  @IsString()
  address: String;

  @Field((type) => String)
  @IsString()
  owner: String;

  @Field((type) => String)
  @IsString()
  categoryName: String;
}
