import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export abstract class ABaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable: false, default: true})
  state!: boolean;

  @CreateDateColumn({name: "created_at", nullable: true})
  createdAt!: Date;

  @UpdateDateColumn({name: "updated_at", nullable: true})
  updatedAt!: Date | null;

  @Column({name: "deleted_at", nullable: true, type: "timestamp"})
  deletedAt!: Date | null;

  @Column({name: "created_by", nullable: true})
  createdBy!: number;

  @Column({name: "updated_by", nullable: true, type: "integer"})
  updatedBy!: number | null;

  @Column({name: "deleted_by", nullable: true, type: "integer"})
  deletedBy!: number | null;
}
