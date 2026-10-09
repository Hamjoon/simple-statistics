FROM node:22-bookworm
RUN apt-get update && apt-get install -y --no-install-recommends git jq python3 && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare yarn@1.22.22 --activate && corepack prepare pnpm@latest --activate
WORKDIR /work
CMD ["bash"]
