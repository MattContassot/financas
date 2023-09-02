/* eslint-disable max-lines-per-function */
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Permissionamentos1693679741971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'log_login',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'userId', type: 'int', isNullable: true, default: null,
        },
        { name: 'email', type: 'varchar(15)', isNullable: false },
      ],
    }));

    await queryRunner.createForeignKey('log_login', new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('permissions');
  }
}
