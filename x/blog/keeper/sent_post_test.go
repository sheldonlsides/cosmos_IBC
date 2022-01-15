package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sheldonlsides/planet/testutil/keeper"
	"github.com/sheldonlsides/planet/testutil/nullify"
	"github.com/sheldonlsides/planet/x/blog/keeper"
	"github.com/sheldonlsides/planet/x/blog/types"
	"github.com/stretchr/testify/require"
)

func createNSentPost(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SentPost {
	items := make([]types.SentPost, n)
	for i := range items {
		items[i].Id = keeper.AppendSentPost(ctx, items[i])
	}
	return items
}

func TestSentPostGet(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNSentPost(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSentPost(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestSentPostRemove(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNSentPost(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSentPost(ctx, item.Id)
		_, found := keeper.GetSentPost(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSentPostGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNSentPost(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSentPost(ctx)),
	)
}

func TestSentPostCount(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNSentPost(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSentPostCount(ctx))
}
