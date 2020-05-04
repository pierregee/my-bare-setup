apollo client:codegen src/api/mutations/types -c=codegen/apollo-mutations.config.js --target=typescript --outputFlat
apollo client:codegen src/api/queries/types -c=codegen/apollo-queries.config.js --target=typescript --outputFlat
rm -rf src/api/mutations/types/globalTypes.ts
rm -rf src/api/queries/types/globalTypes.ts
