.PHONY: push push-prod
push:
	npm run build && npm run export && netlify deploy -d out

push-prod:
	npm run build && npm run export && netlify deploy -d out --prod
