package keeper

import (
	"github.com/sheldonlsides/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
