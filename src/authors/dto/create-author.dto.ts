import { OmitType } from "@nestjs/mapped-types";
import { AuthorEntity } from "../entities/author.entity";
export class CreateAuthorDto extends OmitType(AuthorEntity, ["id"]) {}
