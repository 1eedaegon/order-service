import { ArgsType, Field, InputType } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  name: String;

  @Field((type) => Boolean)
  isVegan: Boolean;

  @Field((type) => String)
  address: String;

  @Field((type) => String)
  owner: String;
}
