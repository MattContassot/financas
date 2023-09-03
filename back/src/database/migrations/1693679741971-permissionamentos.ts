/* eslint-disable max-lines-per-function */
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Permissionamentos1693679741971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'usuarios',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'nome', type: 'varchar(255)', isNullable: false, default: null },
        { name: 'sobrenome', type: 'varchar(255)', isNullable: false },
        { name: 'admin', type: 'boolean', isNullable: false },
        { name: 'criado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
      ],
    }));

    await queryRunner.createTable(new Table({
      name: 'bancos',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'banco', type: 'varchar(255)', isNullable: false },
      ],
    }));

    await queryRunner.createTable(new Table({
      name: 'ambientes',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'nome', type: 'varchar(255)', isNullable: false, default: null },
        {
          name: 'criador_id', type: 'int', isNullable: false,
        },
        { name: 'criado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
      ],
    }));

    await queryRunner.createForeignKey('ambientes', new TableForeignKey({
      columnNames: ['criador_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
    }));

    await queryRunner.createTable(new Table({
      name: 'permissoes',
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
          name: 'usuario_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
        { name: 'admin', type: 'boolean', isNullable: false },
      ],
    }));

    await queryRunner.createForeignKey('permissoes', new TableForeignKey({
      columnNames: ['usuario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
    }));

    await queryRunner.createForeignKey('permissoes', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'cartoes',
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
          name: 'banco_id', type: 'int', isNullable: false,
        },
        { name: 'dia_vencimento', type: 'number', isNullable: false },
        {
          name: 'usuario_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('cartoes', new TableForeignKey({
      columnNames: ['banco_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'bancos',
    }));

    await queryRunner.createForeignKey('cartoes', new TableForeignKey({
      columnNames: ['usuario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
    }));

    await queryRunner.createForeignKey('cartoes', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'categorias',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'categoria', type: 'varchar(255)', isNullable: false },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
        { name: 'icone', type: 'varchar(255)', isNullable: false, default: 'unknown' },
      ],
    }));

    await queryRunner.createForeignKey('categorias', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'compras_fixas',
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
          name: 'usuario_id', type: 'int', isNullable: false,
        },
        { name: 'descricao', type: 'varchar(255)', isNullable: false },
        { name: 'realizacao_prevista', type: 'number', isNullable: false },
        { name: 'realizacao', type: 'date', isNullable: false },
        {
          name: 'cartao_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('compras_fixas', new TableForeignKey({
      columnNames: ['usuario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
    }));

    await queryRunner.createForeignKey('compras_fixas', new TableForeignKey({
      columnNames: ['cartao_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'cartoes',
    }));

    await queryRunner.createForeignKey('compras_fixas', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'categorias_comida',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'categoria', type: 'varchar(255)', isNullable: false },
        {
          name: 'categoria_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('categorias_comida', new TableForeignKey({
      columnNames: ['categoria_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categorias',
    }));

    await queryRunner.createForeignKey('categorias_comida', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'locais_comida',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'local', type: 'varchar(255)', isNullable: false },
        {
          name: 'categorias_comida_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('locais_comida', new TableForeignKey({
      columnNames: ['categorias_comida_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categorias_comida',
    }));

    await queryRunner.createForeignKey('locais_comida', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'compras_comida',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'titulo', type: 'varchar(255)', isNullable: false },
        {
          name: 'locais_comida_id', type: 'int', isNullable: false,
        },
        { name: 'realizada_em', type: 'date', isNullable: false },
        {
          name: 'cartao_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('compras_comida', new TableForeignKey({
      columnNames: ['locais_comida_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'locais_comida',
    }));

    await queryRunner.createForeignKey('compras_comida', new TableForeignKey({
      columnNames: ['cartao_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'cartoes',
    }));

    await queryRunner.createForeignKey('compras_comida', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'compras',
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
          name: 'usuario_id', type: 'int', isNullable: false,
        },
        { name: 'titulo', type: 'varchar(255)', isNullable: false },
        {
          name: 'categoria_id', type: 'int', isNullable: false,
        },
        { name: 'realizada_em', type: 'date', isNullable: false },
        { name: 'parcelada', type: 'boolean', isNullable: false },
        { name: 'primeira_parcela', type: 'date', isNullable: true },
        { name: 'quantidade_parcelas', type: 'number', isNullable: true },
        {
          name: 'cartao_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
        { name: 'comida', type: 'boolean', isNullable: false },
        {
          name: 'compras_comida_id', type: 'int', isNullable: true,
        },
      ],
    }));

    await queryRunner.createForeignKey('compras', new TableForeignKey({
      columnNames: ['usuario_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
    }));

    await queryRunner.createForeignKey('compras', new TableForeignKey({
      columnNames: ['categoria_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categorias',
    }));

    await queryRunner.createForeignKey('compras', new TableForeignKey({
      columnNames: ['cartao_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'cartoes',
    }));

    await queryRunner.createForeignKey('compras', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createForeignKey('compras', new TableForeignKey({
      columnNames: ['compras_comida_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'compras_comida',
    }));

    await queryRunner.createTable(new Table({
      name: 'orcamento',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'mes', type: 'number', isNullable: false },
        { name: 'ano', type: 'number', isNullable: false },
        { name: 'criado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        { name: 'atualizado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('orcamento', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'orcamento_categorias',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'nome', type: 'varchar(255)', isNullable: false },
        {
          name: 'categoria_id', type: 'int', isNullable: false,
        },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('orcamento_categorias', new TableForeignKey({
      columnNames: ['categoria_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categorias',
    }));

    await queryRunner.createForeignKey('orcamento_categorias', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'orcamento_comida',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'mes', type: 'number', isNullable: false },
        { name: 'ano', type: 'number', isNullable: false },
        { name: 'criado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        { name: 'atualizado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        { name: 'orcamento', type: 'decimal', isNullable: false },
        { name: 'orcamento_semanal', type: 'decimal', isNullable: false },
        { name: 'inicio', type: 'date', isNullable: false },
        { name: 'fim', type: 'date', isNullable: false },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('orcamento_comida', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'orcamento_categoria_comida',
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
          name: 'orcamento_comida_id', type: 'int', isNullable: false,
        },
        {
          name: 'categorias_comida_id', type: 'int', isNullable: false,
        },
        { name: 'criado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        { name: 'orcamento', type: 'decimal', isNullable: false },
        { name: 'realizado', type: 'decimal', isNullable: false },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('orcamento_categoria_comida', new TableForeignKey({
      columnNames: ['orcamento_comida_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'orcamento_comida',
    }));

    await queryRunner.createForeignKey('orcamento_categoria_comida', new TableForeignKey({
      columnNames: ['categorias_comida_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categorias_comida',
    }));

    await queryRunner.createForeignKey('orcamento_categoria_comida', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));

    await queryRunner.createTable(new Table({
      name: 'orcamento_itens',
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
          name: 'orcamento_id', type: 'int', isNullable: false,
        },
        {
          name: 'orcamento_categorias_id', type: 'int', isNullable: false,
        },
        { name: 'ativo', type: 'boolean', isNullable: false },
        { name: 'atualizado_em', type: 'timestamp', isNullable: false, default: 'timestamp' },
        {
          name: 'ambiente_id', type: 'int', isNullable: false,
        },
        { name: 'valor_estimado', type: 'decimal', isNullable: false },
        { name: 'valor', type: 'decimal', isNullable: false },
        { name: 'vencimento', type: 'date', isNullable: false },
        { name: 'pago_em', type: 'date', isNullable: false },
        { name: 'pago', type: 'boolean', isNullable: false },
        { name: 'renda', type: 'boolean', isNullable: false },
        { name: 'debito_automatico', type: 'boolean', isNullable: false },
      ],
    }));

    await queryRunner.createForeignKey('orcamento_itens', new TableForeignKey({
      columnNames: ['orcamento_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'orcamento',
    }));

    await queryRunner.createForeignKey('orcamento_itens', new TableForeignKey({
      columnNames: ['orcamento_categorias_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'orcamento_categorias',
    }));

    await queryRunner.createForeignKey('orcamento_itens', new TableForeignKey({
      columnNames: ['ambiente_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'ambientes',
    }));
  }

  public async down(): Promise<void> {
    // não usar
  }
}
