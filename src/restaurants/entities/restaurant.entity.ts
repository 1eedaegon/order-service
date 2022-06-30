import { Field, ObjectType } from '@nestjs/graphql';
import { IsString, IsBoolean, Length, isString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  @Column()
  name: string;

  @Field((type) => Boolean)
  @IsBoolean()
  @Column()
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  @Column()
  address: String;

  @Field((type) => String)
  @IsString()
  @Column()
  owner: String;

  @Field((type) => String)
  @IsString()
  @Column()
  categoryName: string;
}
